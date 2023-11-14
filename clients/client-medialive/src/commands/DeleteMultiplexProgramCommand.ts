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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { DeleteMultiplexProgramRequest, DeleteMultiplexProgramResponse } from "../models/models_1";
import { de_DeleteMultiplexProgramCommand, se_DeleteMultiplexProgramCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteMultiplexProgramCommand}.
 */
export interface DeleteMultiplexProgramCommandInput extends DeleteMultiplexProgramRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMultiplexProgramCommand}.
 */
export interface DeleteMultiplexProgramCommandOutput extends DeleteMultiplexProgramResponse, __MetadataBearer {}

/**
 * @public
 * Delete a program from a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, DeleteMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, DeleteMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // DeleteMultiplexProgramRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   ProgramName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMultiplexProgramResponse
 * //   ChannelId: "STRING_VALUE",
 * //   MultiplexProgramSettings: { // MultiplexProgramSettings
 * //     PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 * //     ProgramNumber: Number("int"), // required
 * //     ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 * //       ProviderName: "STRING_VALUE", // required
 * //       ServiceName: "STRING_VALUE", // required
 * //     },
 * //     VideoSettings: { // MultiplexVideoSettings
 * //       ConstantBitrate: Number("int"),
 * //       StatmuxSettings: { // MultiplexStatmuxVideoSettings
 * //         MaximumBitrate: Number("int"),
 * //         MinimumBitrate: Number("int"),
 * //         Priority: Number("int"),
 * //       },
 * //     },
 * //   },
 * //   PacketIdentifiersMap: { // MultiplexProgramPacketIdentifiersMap
 * //     AudioPids: [ // __listOf__integer
 * //       Number("int"),
 * //     ],
 * //     DvbSubPids: [
 * //       Number("int"),
 * //     ],
 * //     DvbTeletextPid: Number("int"),
 * //     EtvPlatformPid: Number("int"),
 * //     EtvSignalPid: Number("int"),
 * //     KlvDataPids: [
 * //       Number("int"),
 * //     ],
 * //     PcrPid: Number("int"),
 * //     PmtPid: Number("int"),
 * //     PrivateMetadataPid: Number("int"),
 * //     Scte27Pids: [
 * //       Number("int"),
 * //     ],
 * //     Scte35Pid: Number("int"),
 * //     TimedMetadataPid: Number("int"),
 * //     VideoPid: Number("int"),
 * //   },
 * //   PipelineDetails: [ // __listOfMultiplexProgramPipelineDetail
 * //     { // MultiplexProgramPipelineDetail
 * //       ActiveChannelPipeline: "STRING_VALUE",
 * //       PipelineId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProgramName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMultiplexProgramCommandInput - {@link DeleteMultiplexProgramCommandInput}
 * @returns {@link DeleteMultiplexProgramCommandOutput}
 * @see {@link DeleteMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link DeleteMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Placeholder documentation for TooManyRequestsException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class DeleteMultiplexProgramCommand extends $Command<
  DeleteMultiplexProgramCommandInput,
  DeleteMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: DeleteMultiplexProgramCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMultiplexProgramCommandInput, DeleteMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMultiplexProgramCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "DeleteMultiplexProgramCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaLive",
        operation: "DeleteMultiplexProgram",
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
  private serialize(input: DeleteMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMultiplexProgramCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMultiplexProgramCommandOutput> {
    return de_DeleteMultiplexProgramCommand(output, context);
  }
}
