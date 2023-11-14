// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ForecastqueryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastqueryClient";
import { QueryForecastRequest, QueryForecastResponse } from "../models/models_0";
import { de_QueryForecastCommand, se_QueryForecastCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link QueryForecastCommand}.
 */
export interface QueryForecastCommandInput extends QueryForecastRequest {}
/**
 * @public
 *
 * The output of {@link QueryForecastCommand}.
 */
export interface QueryForecastCommandOutput extends QueryForecastResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a forecast for a single item, filtered by the supplied criteria.</p>
 *          <p>The criteria is a key-value pair. The key is either <code>item_id</code> (or the
 *       equivalent non-timestamp, non-target field) from the <code>TARGET_TIME_SERIES</code> dataset,
 *       or one of the forecast dimensions specified as part of the <code>FeaturizationConfig</code>
 *       object.</p>
 *          <p>By default, <code>QueryForecast</code> returns the complete date range for the filtered
 *       forecast. You can request a specific date range.</p>
 *          <p>To get the full forecast, use the <a href="https://docs.aws.amazon.com/en_us/forecast/latest/dg/API_CreateForecastExportJob.html">CreateForecastExportJob</a> operation.</p>
 *          <note>
 *             <p>The forecasts generated by Amazon Forecast are in the same timezone as the dataset that was
 *         used to create the predictor.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastqueryClient, QueryForecastCommand } from "@aws-sdk/client-forecastquery"; // ES Modules import
 * // const { ForecastqueryClient, QueryForecastCommand } = require("@aws-sdk/client-forecastquery"); // CommonJS import
 * const client = new ForecastqueryClient(config);
 * const input = { // QueryForecastRequest
 *   ForecastArn: "STRING_VALUE", // required
 *   StartDate: "STRING_VALUE",
 *   EndDate: "STRING_VALUE",
 *   Filters: { // Filters // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new QueryForecastCommand(input);
 * const response = await client.send(command);
 * // { // QueryForecastResponse
 * //   Forecast: { // Forecast
 * //     Predictions: { // Predictions
 * //       "<keys>": [ // TimeSeries
 * //         { // DataPoint
 * //           Timestamp: "STRING_VALUE",
 * //           Value: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param QueryForecastCommandInput - {@link QueryForecastCommandInput}
 * @returns {@link QueryForecastCommandOutput}
 * @see {@link QueryForecastCommandInput} for command's `input` shape.
 * @see {@link QueryForecastCommandOutput} for command's `response` shape.
 * @see {@link ForecastqueryClientResolvedConfig | config} for ForecastqueryClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The value is invalid or is too long.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The token is not valid. Tokens expire after 24 hours.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find that resource. Check the information that you've provided and try
 *       again.</p>
 *
 * @throws {@link ForecastqueryServiceException}
 * <p>Base exception class for all service exceptions from Forecastquery service.</p>
 *
 */
export class QueryForecastCommand extends $Command<
  QueryForecastCommandInput,
  QueryForecastCommandOutput,
  ForecastqueryClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: QueryForecastCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastqueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<QueryForecastCommandInput, QueryForecastCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryForecastCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastqueryClient";
    const commandName = "QueryForecastCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonForecastRuntime",
        operation: "QueryForecast",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: QueryForecastCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_QueryForecastCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryForecastCommandOutput> {
    return de_QueryForecastCommand(output, context);
  }
}
