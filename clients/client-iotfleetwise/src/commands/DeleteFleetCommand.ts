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

import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DeleteFleetRequest, DeleteFleetResponse } from "../models/models_0";
import { de_DeleteFleetCommand, se_DeleteFleetCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandInput extends DeleteFleetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFleetCommand}.
 */
export interface DeleteFleetCommandOutput extends DeleteFleetResponse, __MetadataBearer {}

/**
 * @public
 * <p> Deletes a fleet. Before you delete a fleet, all vehicles must be
 *             dissociated from the fleet. For more information, see <a href="https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/delete-fleet-cli.html">Delete a fleet (AWS
 *                 CLI)</a> in the <i>Amazon Web Services IoT FleetWise Developer Guide</i>.</p>
 *         <note>
 *             <p>If the fleet is successfully deleted, Amazon Web Services IoT FleetWise sends back an HTTP 200 response
 *                 with an empty body.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteFleetCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteFleetCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteFleetRequest
 *   fleetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFleetResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteFleetCommandInput - {@link DeleteFleetCommandInput}
 * @returns {@link DeleteFleetCommandOutput}
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 */
export class DeleteFleetCommand extends $Command<
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput,
  IoTFleetWiseClientResolvedConfig
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
  constructor(readonly input: DeleteFleetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTFleetWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteFleetCommandInput, DeleteFleetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteFleetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTFleetWiseClient";
    const commandName = "DeleteFleetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTAutobahnControlPlane",
        operation: "DeleteFleet",
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
  private serialize(input: DeleteFleetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteFleetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteFleetCommandOutput> {
    return de_DeleteFleetCommand(output, context);
  }
}
